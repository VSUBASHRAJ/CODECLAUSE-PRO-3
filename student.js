// student.js
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        loadStudentExams();
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

function submitForm() {
    const examId = document.getElementById('examId').value;
    const studentName = document.getElementById('studentName').value;
    const user = auth.currentUser;

    db.collection('forms').add({
        examId: examId,
        studentName: studentName,
        studentId: user.uid,
        status: 'pending'
    }).then(() => {
        alert('Form submitted successfully');
        loadStudentExams();
    }).catch((error) => {
        alert(error.message);
    });
}

function loadStudentExams() {
    const studentExamsList = document.getElementById('studentExamsList');
    studentExamsList.innerHTML = '';
    const user = auth.currentUser;

    db.collection('forms').where('studentId', '==', user.uid).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const li = document.createElement('li');
            li.textContent = `Exam ID: ${doc.data().examId}, Status: ${doc.data().status}`;
            studentExamsList.appendChild(li);
        });
    });
}
