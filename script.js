const formsData = [
    { title: "Settling Allowance Application Form", category: "HR Retirement", description: "Application form for claiming Settling Allowance", fileUrl: "forms/Settling Allowance Form.pdf" },
    { title: "Earned Leave Application Form", category: "Leave Form", description: "Non Ex EL Form for Coal India, ECL, BCCL, CCl, WCL, NCL and other subsidiaries.", fileUrl: "forms/EL_Form.pdf" },
    { title: "Sick Leave Application Form", category: "Leave Form", description: "Non Ex SL Form for Coal India, ECL, BCCL, CCl, WCL, NCL and other subsidiaries.", fileUrl: "forms/SL_Form.pdf" },
    { title: "Casual Leave Application Form", category: "Leave Form", description: "Non Ex CL Form for Coal India, ECL, BCCL, CCl, WCL, NCL and other subsidiaries.", fileUrl: "forms/CL_Form.pdf" },
    { title: "Name Inclusion Application Form", category: "HR", description: "Non Ex Name Inclusion Format download.", fileUrl: "forms/Name_Inclusion_Application_Format.pdf" },
    { title: "DPC Selection Application Form", category: "HR", description: "Form to apply for selection or regularization/Promotion.", fileUrl: "forms/Selection_ApplicationFormat.pdf" },
    { title: "Uniform Bill Format 2026", category: "Finance", description: "ECL Uniform Bill Submission Format.", fileUrl: "forms/UniformBill.pdf" },
    { title: "Travel Assistance Form", category: "Finance", description: "Travel Assistance form for visiting Home Town/Bharat Bhraman.", fileUrl: "forms/TA_Form.pdf" },
    { title: "New Sahaj and Nomination Form", category: "CMPF", description: "Download New Sahaj and Nomination Form CMPF.", fileUrl: "forms/shaj_nomination.pdf" },
    { title: "Pension Payment Order New Format", category: "CMPF", description: "Download PPO New Format.", fileUrl: "forms/ppo.pdf" },
    { title: "CMPF Undertaking Form", category: "CMPF", description: "Download New Undertaking Form CMPF.", fileUrl: "forms/undertaking.pdf" }
];

function displayForms(forms) {
    const grid = document.getElementById('formsGrid');
    grid.innerHTML = '';

    if (forms.length === 0) {
        grid.innerHTML = '<p style="color: #666; grid-column: 1 / -1;">No forms match your search query.</p>';
        return;
    }

    forms.forEach(form => {
        const cardHtml = `
            <div class="form-card">
                <div>
                    <span class="form-category">${form.category}</span>
                    <h3 class="form-title">${form.title}</h3>
                    <p class="form-description">${form.description}</p>
                </div>
                <a href="${form.fileUrl}" class="btn-download" download>Download PDF</a>
            </div>
        `;
        grid.innerHTML += cardHtml;
    });
}

function filterForms() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = formsData.filter(form => 
        form.title.toLowerCase().includes(query) || 
        form.category.toLowerCase().includes(query) ||
        form.description.toLowerCase().includes(query)
    );
    displayForms(filtered);
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    displayForms(formsData);
});