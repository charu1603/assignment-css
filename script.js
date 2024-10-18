function toggleSubSidebar() {
    const subSidebar = document.getElementById("subSidebar");
    subSidebar.classList.toggle("open");
}

const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "#FEAB33",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "#7C69BF",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
const salesData = [
    {
        "name": "Jamie Chen",
        "store": "lowe's of jonesboro",
        "city": "Wasilla",
        "region": "Southwest",
        "opportunities": 20,
        "chase": 8,
        "proposal": 4,
        "contracting": 2,
        "escalated": 2,
        "won": 1,
        "lost": 0,
        "hygiene": "22%"
    },
    {
        "name": "Morgan Green",
        "store": "lowe's of carefree, az",
        "city": "Carefree",
        "region": "West",
        "opportunities": 35,
        "chase": 12,
        "proposal": 6,
        "contracting": 5,
        "escalated": 5,
        "won": 3,
        "lost": 1,
        "hygiene": "35%"
    },
    {
        "name": "Dana White",
        "store": "lowe's of prescott",
        "city": "Chandler",
        "region": "Southeast",
        "opportunities": 28,
        "chase": 10,
        "proposal": 5,
        "contracting": 4,
        "escalated": 4,
        "won": 2,
        "lost": 0,
        "hygiene": "23%"
    },
    {
        "name": "Riley Brown",
        "store": "lowe's of sierra vista",
        "city": "Mesa",
        "region": "Midwest",
        "opportunities": 37,
        "chase": 14,
        "proposal": 6,
        "contracting": 5,
        "escalated": 5,
        "won": 9,
        "lost": 1,
        "hygiene": "50%"
    }
];

// Function to populate the first table (Sales Rep Details)
function populateSalesRepTable() {
    const tableBody = document.querySelector("#sales-rep-table tbody");
    salesData.forEach(rep => {
        const row = `
            <tr>
                <td class="gray-bg">${rep.name}</td>
                <td class="gray-bg">${rep.store}</td>
                <td class="gray-bg">${rep.city}</td>
                <td class="gray-bg">${rep.region}</td>
               
            </tr>
            <tr></tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Function to populate the second table (Sales Metrics)
function populateSalesMetricsTable() {
    const tableBody = document.querySelector("#sales-metrics-table tbody");
    let totalOpportunities = 0;
    let totalChase = 0;
    let totalProposal = 0;

    salesData.forEach(rep => {
        const row = `
            <tr>
                <td>${rep.opportunities}</td>
                <td>${rep.chase}</td>
                <td>${rep.proposal}</td>
                <td>${rep.contracting}</td>
                <td>${rep.escalated}</td>
                <td>${rep.won}</td>
                <td>${rep.lost}</td>
                <td class="hygiene-score">${rep.hygiene}</td>
            </tr>
        `;
        tableBody.innerHTML += row;

        // Sum up the totals
        totalOpportunities += rep.opportunities;
        totalChase += rep.chase;
        totalProposal += rep.proposal;
    });

    // Update totals in the footer
    document.getElementById('total-opportunities').innerText = totalOpportunities;
    document.getElementById('total-chase').innerText = totalChase;
    document.getElementById('total-proposal').innerText = totalProposal;
}

// Call functions to populate tables on page load
window.onload = function () {
    populateSalesRepTable();
    populateSalesMetricsTable();
}

// Function to toggle between table and graph views
const viewSelector = document.getElementById('view-selector');
const tableSection = document.getElementById('table-section');
const graphSection = document.getElementById('graph-section');

// Add event listener to the dropdown to toggle views
viewSelector.addEventListener('change', function () {
    if (this.value === 'table') {
        tableSection.style.display = 'block';  // Show the table
        graphSection.style.display = 'none';   // Hide the graph
    } else if (this.value === 'graph') {
        tableSection.style.display = 'none';   // Hide the table
        graphSection.style.display = 'block';  // Show the graph
    }
});
var ctx = document.getElementById("myChart3");
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Male", "Female"],
        datasets: [{
            label: '# of Votes',
            data: [41, 16],
            backgroundColor: [
                '#7C69BF',
                '#D3D3D3'
            ],
            borderWidth: 0
        }]
    },
    options: {
      legend: {
            display: false
            },
    		cutoutPercentage: 75,
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
    }
});

const funnelData = [
    {
        'Total Opportunities': '$50,000',
        'Chase': '$30,000',
        'Proposal': '$20,000',
        'Contracting': '$10,000',
        'Escalated Opportunity': '$7,000',
        'Won': '$5,000'
    },
    {
        'Total Opportunities': '$45,000',
        'Chase': '$28,000',
        'Proposal': '$18,000',
        'Contracting': '$9,000',
        'Escalated Opportunity': '$6,000',
        'Won': '$4,000'
    },
    {
        'Total Opportunities': '$60,000',
        'Chase': '$35,000',
        'Proposal': '$25,000',
        'Contracting': '$12,000',
        'Escalated Opportunity': '$8,000',
        'Won': '$6,000'
    }
];

// Function to populate the table with multiple rows of funnel data
function populateTable() {
    const tableBody = document.querySelector('#sales-table tbody');
    tableBody.innerHTML = ''; // Clear any existing rows

    funnelData.forEach(rowData => {
        const row = document.createElement('tr');
        
        for (const stage in rowData) {
            const cell = document.createElement('td');
            cell.textContent = rowData[stage];
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    });
}

// Call the function to populate the table when the page loads
populateTable();
