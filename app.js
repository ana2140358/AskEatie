const cafeList = document.querySelector('#cafe-list');

db.collection('users').get().then((snapshot)=> {
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
    })
})