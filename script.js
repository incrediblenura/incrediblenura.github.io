const     bal = $("#balance");
const   total = $( "#total" );
const   price = $( "#price" );
const    date = $( "#date"  );
const txntype = $("#txntype");
const tx_list = $("#tx_list");
const debit_am = $("#debit_am");
const credit_am = $("#credit_am");
const      ctx = $('#myChart');
class BalanceManager{
    constructor(){
        this._balance = 0;
        this.debit = 0;
        this.credit = 0;
        this.data = {
            labels:['Debit','Credit'],
            datasets:[{label:'Expenditure',data:[this.debit,this.credit],backgroundColor:['red','green']}],
            hoverOffset:4
        };
        date.valueAsDate = new Date();
        const config = { type : 'pie', data : this.data };
        this.chart = new Chart(ctx,config);
    }
    setup(){
        this.setBalance();
    }
    updateChart(){
        this.data.datasets[0].data = [this.debit,this.credit];
        console.log(this.data.datasets[0].data);
        this.chart.update();
    }
    setBalance(){
        bal.innerHTML = this._balance;
        if(this._balance > 0)
        {
            total.classList.remove('w3-text-red');
            total.classList.add('w3-text-green');
        }
        else{
            total.classList.remove('w3-text-green');
            total.classList.add('w3-text-red');
        }
        this.updateChart();
    }
    setDebit(){
        debit_am.innerText = this.debit;
    }
    debitBalance(){
        this._balance -= parseInt(price.value);
        this.debit = this.debit + parseInt(price.value);
        this.setBalance();
        this.setDebit();
    }
    setCredit(){
        credit_am.innerText = this.credit;
    }
    creditBalance(){
        this._balance += parseInt(price.value);
        this.credit = this.credit + parseInt(price.value);
        this.setBalance();
        this.setCredit();
    }
    addTxn(){
    const txn = {
        title: title.value,
        price: price.value,
        time: date.value
        }
        if(!txn.title || !txn.price || !txn.time)return;
        else
        {
            let str ='';
            const li_item = document.createElement('tr');
            if(txntype.value === '0'){
 //               td_elem.classList.add('alert','alert-danger');
                li_item.innerHTML = `<td>₹ ${txn.price}</td><td>${txn.title}</td><td>${txn.time}</td><td>Debit</td>`;
            this.debitBalance();
            }
            else{
//                td_elem.classList.add('alert','alert-success');
                li_item.innerHTML = `<td>₹ ${txn.price}</td><td>${txn.title}</td><td>${txn.time}</td><td>Credit</td>`;
            this.creditBalance();
            }
            tx_list.appendChild(li_item);
        }
}
}
let balance = new BalanceManager();
balance.setup();

// Any of the following formats may be used
