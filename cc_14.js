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


