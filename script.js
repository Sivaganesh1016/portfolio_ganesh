/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Close menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});



/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =========================================
   PROJECT MODAL
========================================= */

const projectData = {

    powerbi: {

        label: "POWER BI PROJECT",

        title: "Team Performance Dashboard",

        description:
            "An interactive Power BI dashboard designed to monitor team productivity, quality, targets and performance.",

        details: `
            <ul>
                <li>Built using Power BI and Excel data.</li>
                <li>Created KPI cards for performance monitoring.</li>
                <li>Analyzed productivity and quality metrics.</li>
                <li>Used DAX for calculated measures.</li>
                <li>Designed the dashboard for business reporting.</li>
            </ul>
        `

    },


    vba: {

        label: "EXCEL VBA PROJECT",

        title: "Data Cleaning Automation",

        description:
            "An Excel VBA project created to automate repetitive data-cleaning tasks.",

        details: `
            <ul>
                <li>Removed unnecessary spaces.</li>
                <li>Identified duplicate records.</li>
                <li>Checked missing fields.</li>
                <li>Validated email information.</li>
                <li>Generated a summary of cleaned data.</li>
            </ul>
        `

    },


    crm: {

        label: "CRM CASE STUDY",

        title: "CRM Data Quality Case Study",

        description:
            "A practical demonstration of how B2B CRM data can be cleaned, validated and standardized.",

        details: `
            <ul>
                <li>Reviewed CRM fields.</li>
                <li>Standardized data values.</li>
                <li>Identified missing information.</li>
                <li>Validated lead and contact information.</li>
                <li>Prepared data for reporting and analysis.</li>
            </ul>
        `

    },

    excel: {

        label: "EXCEL RESOURCE",

        title: "Excel Template Library",

        description:
            "A collection of practical Excel templates for business, CRM and marketing workflows.",

        details: `
            <p>
                Templates will be added here as they are created.
            </p>
        `

    }

};



function showProject(project) {

    const data = projectData[project];


    if (!data) {
        return;
    }


    document.getElementById("modalLabel").textContent =
        data.label;


    document.getElementById("modalTitle").textContent =
        data.title;


    document.getElementById("modalDescription").textContent =
        data.description;


    document.getElementById("modalDetails").innerHTML =
        data.details;


    document.getElementById("projectModal")
        .classList.add("active");

}



function closeProject() {

    document.getElementById("projectModal")
        .classList.remove("active");

}



/* Close modal when clicking outside */

document.getElementById("projectModal")
    .addEventListener("click", function (event) {

        if (event.target === this) {

            closeProject();

        }

    });



/* Close modal using Escape */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProject();

    }

});

// =========================================
// POWER BI IMAGE PREVIEW
// =========================================

document.querySelectorAll(".project-image").forEach(function (image) {

    image.addEventListener("click", function () {

        window.open(this.src, "_blank");

    });

});