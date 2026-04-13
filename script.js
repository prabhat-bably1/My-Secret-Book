const API_BASE = "https://mysecretbook-backend.onrender.com";

const token = localStorage.getItem("msb_token");
const storedUser = JSON.parse(localStorage.getItem("msb_user") || "null");

const profileName = document.querySelector(".profile-name");
const profileId = document.querySelector(".profile-id");
const avatar = document.querySelector(".avatar");
const secretCount = document.getElementById("secretCount");
const imageCount = document.getElementById("imageCount");

const secretText = document.getElementById("secretText");
const wordPreview = document.getElementById("wordPreview");
const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");

const saveTextBtn = document.getElementById("saveTextBtn");
const clearTextBtn = document.getElementById("clearTextBtn");
const saveImageBtn = document.getElementById("saveImageBtn");
const clearImageBtn = document.getElementById("clearImageBtn");

const wordPanel = document.getElementById("wordPanel");
const imagePanel = document.getElementById("imagePanel");
const wordTabBtn = document.getElementById("wordTabBtn");
const imageTabBtn = document.getElementById("imageTabBtn");

const logoutBtn = document.getElementById("logoutBtn");

let selectedImageBase64 = "";
let allMyPosts = [];

function requireLogin() {
  if (!token) {
    alert("Pehle login karo.");
    window.location.href = "login.html";
  }
}

requireLogin();

function formatDate(dateString) {
  const d = new Date(dateString);
  return d.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text || "";
  return div.innerHTML;
}

function setUserUI(user) {
  if (!user) return;

  const name = user.name || "User";
  const username = user.username || "username";

  if (profileName) profileName.textContent = name;
  if (profileId) profileId.textContent = `@${username}`;
  if (avatar) avatar.textContent = name.charAt(0).toUpperCase();
}

async function loadMyProfile() {
  try {
    const res = await fetch(`${API_BASE}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Profile load failed");
    }

    localStorage.setItem("msb_user", JSON.stringify(data.user));
    setUserUI(data.user);
  } catch (error) {
    console.error(error);
    alert("Session expire ho gaya. Dobara login karo.");
    localStorage.removeItem("msb_token");
    localStorage.removeItem("msb_user");
    window.location.href = "login.html";
  }
}

async function loadMyPosts() {
  try {
    const res = await fetch(`${API_BASE}/api/posts/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Posts load failed");
    }

    allMyPosts = data.posts || [];

    const textPosts = allMyPosts.filter(
      (post) => post.text && post.text.trim() && !post.image
    );

    const imagePosts = allMyPosts.filter((post) => post.image);

    if (secretCount) secretCount.textContent = textPosts.length;
    if (imageCount) imageCount.textContent = imagePosts.length;

    renderWordPosts(textPosts);
    renderImagePosts(imagePosts);
  } catch (error) {
    console.error(error);
    alert("Posts load nahi ho paaye.");
  }
}

function renderWordPosts(posts) {
  if (!wordPanel) return;

  if (!posts.length) {
    wordPanel.innerHTML = `
      <div class="saved-box">
        <div class="empty-note">Abhi tak koi secret text save nahi hua.</div>
      </div>
    `;
    return;
  }

  wordPanel.innerHTML = `
    <div class="saved-box">
      ${posts
        .map(
          (post) => `
        <div class="saved-item">
          <div class="saved-date">${formatDate(post.createdAt)}</div>
          <div class="saved-text">${escapeHtml(post.text)}</div>

          <div class="post-actions">
            <button class="mini-btn like-btn" data-id="${post._id}">
              ❤️ ${post.likes?.length || 0}
            </button>
            <button class="mini-btn share-btn" data-id="${post._id}">
              🔗 Share ${post.shares || 0}
            </button>
            <button class="mini-btn delete-btn" data-id="${post._id}">
              🗑 Delete
            </button>
          </div>

          <div class="comment-box">
            <input type="text" class="comment-input" data-id="${post._id}" placeholder="Comment likho..." />
          </div>

          <div class="comment-list">
            ${
              post.comments?.length
                ? post.comments
                    .map(
                      (comment) => `
                  <div class="comment-item">
                    <strong>${escapeHtml(comment.name)}:</strong> ${escapeHtml(comment.text)}
                  </div>
                `
                    )
                    .join("")
                : `<div class="comment-item">Abhi koi comment nahi hai.</div>`
            }
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

function renderImagePosts(posts) {
  if (!imagePanel) return;

  if (!posts.length) {
    imagePanel.innerHTML = `
      <div class="saved-box">
        <div class="empty-note">Abhi tak koi image memory save nahi hui.</div>
      </div>
    `;
    return;
  }

  imagePanel.innerHTML = `
    <div class="saved-box">
      ${posts
        .map(
          (post) => `
        <div class="saved-item">
          <div class="saved-date">${formatDate(post.createdAt)}</div>
          ${
            post.text
              ? `<div class="saved-text">${escapeHtml(post.text)}</div>`
              : ""
          }
          <img class="saved-image" src="${post.image}" alt="Saved memory">

          <div class="post-actions">
            <button class="mini-btn like-btn" data-id="${post._id}">
              ❤️ ${post.likes?.length || 0}
            </button>
            <button class="mini-btn share-btn" data-id="${post._id}">
              🔗 Share ${post.shares || 0}
            </button>
            <button class="mini-btn delete-btn" data-id="${post._id}">
              🗑 Delete
            </button>
          </div>

          <div class="comment-box">
            <input type="text" class="comment-input" data-id="${post._id}" placeholder="Comment likho..." />
          </div>

          <div class="comment-list">
            ${
              post.comments?.length
                ? post.comments
                    .map(
                      (comment) => `
                  <div class="comment-item">
                    <strong>${escapeHtml(comment.name)}:</strong> ${escapeHtml(comment.text)}
                  </div>
                `
                    )
                    .join("")
                : `<div class="comment-item">Abhi koi comment nahi hai.</div>`
            }
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

secretText?.addEventListener("input", () => {
  const value = secretText.value.trim();
  wordPreview.textContent = value || "Yahan typed text ka quick preview dikhega.";
});

imageInput?.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) {
    selectedImageBase64 = "";
    imagePreview.innerHTML = "Image preview yahan dikhega.";
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    selectedImageBase64 = reader.result;
    imagePreview.innerHTML = `<img src="${selectedImageBase64}" alt="Preview">`;
  };
  reader.readAsDataURL(file);
});

saveTextBtn?.addEventListener("click", async () => {
  const text = secretText.value.trim();

  if (!text) {
    alert("Pehle kuch likho.");
    return;
  }

  try {
    saveTextBtn.disabled = true;
    saveTextBtn.textContent = "Saving...";

    const res = await fetch(`${API_BASE}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Text save failed");
    }

    alert("Secret save ho gaya ✅");
    secretText.value = "";
    wordPreview.textContent = "Yahan typed text ka quick preview dikhega.";
    await loadMyPosts();
  } catch (error) {
    console.error(error);
    alert(error.message || "Save failed");
  } finally {
    saveTextBtn.disabled = false;
    saveTextBtn.textContent = "Save Secret";
  }
});

saveImageBtn?.addEventListener("click", async () => {
  const text = secretText.value.trim();
  const image = selectedImageBase64;

  if (!image) {
    alert("Pehle image select karo.");
    return;
  }

  try {
    saveImageBtn.disabled = true;
    saveImageBtn.textContent = "Saving...";

    const res = await fetch(`${API_BASE}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text, image }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Image save failed");
    }

    alert("Image memory save ho gayi ✅");
    imageInput.value = "";
    selectedImageBase64 = "";
    imagePreview.innerHTML = "Image preview yahan dikhega.";
    secretText.value = "";
    wordPreview.textContent = "Yahan typed text ka quick preview dikhega.";
    await loadMyPosts();
  } catch (error) {
    console.error(error);
    alert(error.message || "Save failed");
  } finally {
    saveImageBtn.disabled = false;
    saveImageBtn.textContent = "Save Image";
  }
});

clearTextBtn?.addEventListener("click", () => {
  secretText.value = "";
  wordPreview.textContent = "Yahan typed text ka quick preview dikhega.";
});

clearImageBtn?.addEventListener("click", () => {
  imageInput.value = "";
  selectedImageBase64 = "";
  imagePreview.innerHTML = "Image preview yahan dikhega.";
});

wordTabBtn?.addEventListener("click", () => {
  wordTabBtn.classList.add("active");
  imageTabBtn.classList.remove("active");
  wordPanel.classList.add("active");
  imagePanel.classList.remove("active");
});

imageTabBtn?.addEventListener("click", () => {
  imageTabBtn.classList.add("active");
  wordTabBtn.classList.remove("active");
  imagePanel.classList.add("active");
  wordPanel.classList.remove("active");
});

document.addEventListener("click", async (e) => {
  const likeBtn = e.target.closest(".like-btn");
  const shareBtn = e.target.closest(".share-btn");
  const deleteBtn = e.target.closest(".delete-btn");

  if (likeBtn) {
    const postId = likeBtn.dataset.id;
    try {
      const res = await fetch(`${API_BASE}/api/posts/${postId}/like`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Like failed");

      await loadMyPosts();
    } catch (error) {
      console.error(error);
      alert("Like failed");
    }
  }

  if (shareBtn) {
    const postId = shareBtn.dataset.id;
    try {
      const res = await fetch(`${API_BASE}/api/posts/${postId}/share`, {
        method: "PUT",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Share failed");

      await loadMyPosts();
    } catch (error) {
      console.error(error);
      alert("Share failed");
    }
  }

  if (deleteBtn) {
    const postId = deleteBtn.dataset.id;
    const ok = confirm("Kya tum is post ko delete karna chahte ho?");
    if (!ok) return;

    try {
      const res = await fetch(`${API_BASE}/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Delete failed");

      await loadMyPosts();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  }
});

document.addEventListener("keydown", async (e) => {
  const input = e.target.closest(".comment-input");
  if (!input) return;

  if (e.key === "Enter") {
    e.preventDefault();

    const postId = input.dataset.id;
    const text = input.value.trim();

    if (!text) return;

    try {
      const res = await fetch(`${API_BASE}/api/posts/${postId}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Comment failed");

      input.value = "";
      await loadMyPosts();
    } catch (error) {
      console.error(error);
      alert("Comment failed");
    }
  }
});

logoutBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("msb_token");
  localStorage.removeItem("msb_user");
  window.location.href = "login.html";
});

if (storedUser) {
  setUserUI(storedUser);
}

loadMyProfile();
loadMyPosts();
