const API = "https://resume-analyzer-7fnx.onrender.com";

// Load roles
fetch(`${API}/roles`)
    .then(res => res.json())
    .then(data => {
        const roleSelect = document.getElementById("roleSelect");

        Object.keys(data).forEach(role => {
            let option = document.createElement("option");
            option.value = role;
            option.text = role;
            roleSelect.appendChild(option);
        });
    });

async function analyzeResume() {
    const role = document.getElementById("roleSelect").value;
    const fileInput = document.getElementById("resumeFile");

    if (!role || fileInput.files.length === 0) {
        alert("Select role and upload resume");
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    const res = await fetch(
        `${API}/analyze-resume?role=${role}`,
        {
            method: "POST",
            body: formData
        }
    );

    const data = await res.json();

    document.getElementById("result").innerHTML = `
        <h2>Score: ${data.score}/100</h2>

        <p><b>Skills Found:</b> ${data.found_skills.join(", ")}</p>

        <p><b>Missing Skills:</b> ${data.missing_skills.join(", ")}</p>

        <h3>Suggestions</h3>
        <ul>
            ${data.suggestions.map(s => `<li>${s}</li>`).join("")}
        </ul>
    `;
}
