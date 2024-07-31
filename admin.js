// admin.js
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        loadExams();
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

function createExam() {
    const examTitle = document.getElementById('examTitle').value;
    db.collection('exams').add({
        title: examTitle
    }).then(() => {
        alert('Exam created successfully');
        loadExams();
    }).catch((error) => {
        alert(error.message);
    });
}

function loadExams() {
    const examsList = document.getElementById('examsList');
    examsList.innerHTML = '';
    db.collection('exams').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const li = document.createElement('li');
            li.textContent = doc.data().title;
            examsList.appendChild(li);
        });
    });
}
