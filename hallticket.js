// hallticket.js
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        loadHallTickets();
    } else {
        // Redirect to login
        window.location.href = 'index.html';
    }
});

function logout() {
    auth.signOut().then(() => {
        window.location.href = 'index.html';
    });
}

function loadHallTickets() {
    const hallTicketList = document.getElementById('hallTicketList');
    hallTicketList.innerHTML = '';
    const user = auth.currentUser;

    db.collection('forms').where('studentId', '==', user.uid).where('status', '==', 'approved').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const li = document.createElement('li');
            li.textContent = `Exam ID: ${doc.data().examId}`;
            const downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download Hall Ticket';
            downloadButton.onclick = () => downloadHallTicket(doc.data().examId, doc.data().studentName);
            li.appendChild(downloadButton);
            hallTicketList.appendChild(li);
        });
    });
}

function downloadHallTicket(examId, studentName) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(`Hall Ticket for Exam ID: ${examId}`, 10, 10);
    doc.text(`Student Name: ${studentName}`, 10, 20);
    doc.save('hall_ticket.pdf');
}
