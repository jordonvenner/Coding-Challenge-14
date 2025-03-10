///TASK2
// Function to create a support ticket
function createSupportTicket(customerName, issueDescription, priority) {
    // Create the ticket container
    const ticket = document.createElement("div");
    ticket.classList.add("ticket");
    ticket.setAttribute("data-priority", priority.toLowerCase());

    // Add customer name
    const nameHeading = document.createElement("h2");
    nameHeading.textContent = customerName;
    ticket.appendChild(nameHeading);

    // Add issue description
    const issuePara = document.createElement("p");
    issuePara.textContent = issueDescription;
    ticket.appendChild(issuePara);

    // Add priority level
    const priorityLabel = document.createElement("span");
    priorityLabel.textContent = `Priority: ${priority}`;
    priorityLabel.classList.add("priority");
    ticket.appendChild(priorityLabel);

    // Add resolve button
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    
    ticket.appendChild(resolveButton);

    // Append the ticket to the ticket container
    document.getElementById("ticketContainer").appendChild(ticket);
}

// Example: Adding a few support tickets
createSupportTicket("John Doe", "Unable to log in to the system.", "High");
createSupportTicket("Jane Smith", "Payment not processed.", "Medium");
createSupportTicket("Alice Johnson", "Website loading slowly.", "Low");
createSupportTicket("John Doe2", "Unable to log in to the system.", "High");


///TASK3
// Function to highlight high-priority tickets
function highlightHighPriorityTickets() {
    // Select all high-priority tickets
    const highPriorityTickets = document.querySelectorAll('.ticket[data-priority="high"]');

    // Convert NodeList to an array
    const ticketsArray = Array.from(highPriorityTickets);

    // Apply a style update to each high-priority ticket
    ticketsArray.forEach((ticket) => {
        ticket.style.backgroundColor = "#ffcccc"; // Light red background
        ticket.style.border = "2px solid #ff0000"; // Red border
    });
}

// Call the function to highlight high-priority tickets
highlightHighPriorityTickets();


///TASK4
// Add event listener to the ticket container for event bubbling
const ticketContainer = document.getElementById("ticketContainer");

ticketContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        // If the clicked element is a button, remove the ticket
        const ticket = event.target.closest(".ticket");
        if (ticket) {
            ticket.remove();
        }
        // Stop event bubbling
        event.stopPropagation();
    } else {
        // Log a message when any ticket is clicked
        console.log("Ticket clicked!");
    }
});

////TASK 5
// Function to enable inline editing
function enableInlineEditing(ticket) {
    const nameHeading = ticket.querySelector("h2");
    const issuePara = ticket.querySelector("p");
    const priorityLabel = ticket.querySelector(".priority");

    // Store the original content
    const originalName = nameHeading.textContent;
    const originalIssue = issuePara.textContent;
    const originalPriority = priorityLabel.textContent.replace("Priority: ", "");

    // Replace static content with input fields
    nameHeading.innerHTML = `<input type="text" value="${originalName}" />`;
    issuePara.innerHTML = `<input type="text" value="${originalIssue}" />`;
    priorityLabel.innerHTML = `
        <select>
            <option value="High" ${originalPriority === "High" ? "selected" : ""}>High</option>
            <option value="Medium" ${originalPriority === "Medium" ? "selected" : ""}>Medium</option>
            <option value="Low" ${originalPriority === "Low" ? "selected" : ""}>Low</option>
        </select>
    `;

    // Add a save button
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
        // Update the ticket with the new values
        const newName = nameHeading.querySelector("input").value;
        const newIssue = issuePara.querySelector("input").value;
        const newPriority = priorityLabel.querySelector("select").value;

        nameHeading.textContent = newName;
        issuePara.textContent = newIssue;
        priorityLabel.textContent = `Priority: ${newPriority}`;

        // Remove the save button
        saveButton.remove();
    });

    ticket.appendChild(saveButton);
}

// Add double-click event listener to support tickets
ticketContainer.addEventListener("dblclick", (event) => {
    const ticket = event.target.closest(".ticket");
    if (ticket) {
        enableInlineEditing(ticket);
    }
});
