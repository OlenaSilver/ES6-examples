let money, time;
        function start(){
            money = +prompt("Ваш бюджет на месяц?", "7500");
            
            while(isNaN(money) || money === 0){
                money = +prompt("Ваш бюджет на месяц?", "");
            }
            time = prompt("Введите дату в формате YYYY-MM-DD", '2018-12-08');
           
        }
        start();
        let appData = {
            budjet: money,
            timeData: time,
            expenses: {},
            optionalExpenses: {},
            income: [],
            savings: true
        }
function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let st = prompt("Введите обязательную статью расходов в этом месяце", 'Оплата квартиры');
        let stValue = +prompt("Во сколько обойдется " + st + "?", "800");

        if (typeof st === 'string' && typeof (st) != null && typeof (stValue) != null && st != '' &&  stValue >0 && stValue != '' &&  st.length < 20) {
            appData.expenses[st] = stValue;
            appData.budjet -= stValue;
        } else {
            alert("Неверный тип данных. Повторите ввод!");
            i--;
        }
    }  
}
chooseExpenses();

checkSavings();

function checkSavings(){
    if(appData.savings){
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Какой процент?");
        appData.monthIncome = +(save/100/12*percent).toFixed(2);
        alert("Доход с депозита в месяц "+appData.monthIncome);
    }
}
function chooseOptExpenses(){
    for(let i=1;i<4; i++){
      let opt = prompt("Статья необязательных расходов?",'');
      while(opt=='' || opt===null || opt.length<2 || typeof opt !== 'string'){
        opt = prompt("Статья необязательных расходов?",'');
      }
      appData.optionalExpenses[i] = opt;
    }
}
chooseOptExpenses();
function detectLevel(){
    if(appData.moneyPerDay<=100) mes="Minimum level";
    else  if(appData.moneyPerDay>100 && appData.moneyPerDay<200) mes="Medium level";
    else  if(appData.moneyPerDay>300) mes="High level"; 
    else mes="You are lucky guy, yoh!";
    console.log(mes);
    alert(mes);
}
detectLevel();
function detectDayBudget(){
    appData.moneyPerDay = +(appData.budjet / 30).toFixed(2);
    console.log("Бюджет пользователя на 1 день составляет " + appData.moneyPerDay);
    alert("Бюджет пользователя на 1 день составляет " + appData.moneyPerDay);
}
detectDayBudget();