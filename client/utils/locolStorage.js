const getLocol = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []

// set to localStorage
const setToLocolStorage = (data) => {
    modalContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('addBtn')) {
            e.stopPropagation()
            const addBtn = document.querySelector('.addBtn')        
            addBtn.addEventListener('click', (event) => {
                event.stopPropagation()
                getLocol.push(data)
                localStorage.setItem('list', JSON.stringify(getLocol)) 
                bagLengt()
                modalOverlay.classList.add('hidden')
                Message('qoshldi');   
                setTimeout(() => {
                    window.location.reload()       
                }, 3000);            
            })
        }
    })
    
}
