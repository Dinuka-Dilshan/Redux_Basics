import { bugAdded, bugRemoved, bugResolved } from "./action";
import store from "./store";





const app = document.getElementById('app');

store.subscribe(()=>{
    app.innerHTML = "";
    store.getState().map(bug=>{
        const p = document.createElement('p');
        p.innerText = bug.description;
        app.appendChild(p)
    })

    console.log(store.getState())
})



store.dispatch(bugAdded('test1'))
store.dispatch(bugResolved(1))







