// src/components/UserEdit.ts
import { useEffect } from 'react';

export default function UserEdit() {
  useEffect(() => {
    const editBtn = document.getElementById("edit-btn")!;
    const updateBtn = document.getElementById("update-btn")!;
    const inputs = ["name", "cell", "email"].map(id => document.getElementById(id) as HTMLInputElement);

    editBtn.addEventListener("click", () => {
      inputs.forEach(input => input.disabled = false);
      editBtn.classList.add("hidden");
      updateBtn.classList.remove("hidden");
    });

    updateBtn.addEventListener("click", async () => {
      const body = {
        name: inputs[0].value,
        cell: inputs[1].value,
        email: inputs[2].value,
      };

      const userId = location.pathname.split("/").pop();
      const res = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        alert("User updated successfully ✅");
        location.reload();
      } else {
        alert("Error updating user ❌");
      }
    });
  }, []);

  return null;
}
