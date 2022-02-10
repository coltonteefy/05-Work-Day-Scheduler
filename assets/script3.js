const timeList = document.getElementById('timeList');

let taskUpdates = {
  task: "",
  id: 0,
};

let storage = {};

const onLoad = () => {
  if (localStorage.getItem('currentDayTimes') === null) {
    const currentDayTimes = {
      9: { time: "9:00 AM", task: "" },
      10: { time: "10:00 AM", task: "" },
      11: { time: "11:00 AM", task: "" },
      12: { time: "12:00 PM", task: "" },
      13: { time: "1:00 PM", task: "" },
      14: { time: "2:00 PM", task: "" },
      15: { time: "3:00 PM", task: "" },
      16: { time: "4:00 PM", task: "" },
      17: { time: "5:00 PM", task: "" },
    }

    localStorage.setItem('currentDayTimes', JSON.stringify(currentDayTimes))
  } else {
    storage = JSON.parse(localStorage.getItem('currentDayTimes'));
    console.log(storage)
    for (const [key, value] of Object.entries(storage)) {
      createTimeRow(key, value);
    }
  }
}

const saveUpdatedTasks = () => {
  localStorage.setItem('currentDayTimes', JSON.stringify(storage));
}

const onChange = (e) => {
  taskUpdates.task = e.target.value;
  taskUpdates.id = e.target.id;

  storage[taskUpdates.id].task = taskUpdates.task;
  console.log("changing", taskUpdates, storage);
}

const createTimeRow = (key, value) => {
  let pastPresentFuture = "present";
  const militaryTime = moment(new Date()).format("H");

  if (Number(militaryTime) === Number(key)) {
    pastPresentFuture = "present";
  } else {
    Number(key) > Number(militaryTime) ? pastPresentFuture = "future" : pastPresentFuture = "past";
  }

  const newRow = document.createElement('tr');
  newRow.setAttribute('class', pastPresentFuture);

  const timeSection = document.createElement('td');
  timeSection.appendChild(document.createTextNode(value.time));
  newRow.appendChild(timeSection);

  const input = document.createElement('input');
  input.addEventListener('change', (e) => { onChange(e) })
  input.setAttribute('type', "text");
  input.setAttribute('class', "form-control");
  input.setAttribute('id', key);
  input.setAttribute('placeholder', value.task != "" ? value.task : "Schedule Event Details");
  input.setAttribute('aria-label', "Recipient's username");
  input.setAttribute('aria-describedby', "button-addon2");

  const button = document.createElement('button');
  button.setAttribute('class', "btn btn-outline-secondary saveBtn");
  button.setAttribute('id', "button-addon2");
  button.setAttribute('onclick', 'saveUpdatedTasks()')
  button.appendChild(document.createTextNode("Save"));

  const inputSection = document.createElement('td');
  inputSection.setAttribute('class', 'input-grid');
  inputSection.appendChild(input);
  inputSection.appendChild(button);
  newRow.appendChild(inputSection);

  inputSection.appendChild(input);
  inputSection.appendChild(button);

  timeList.appendChild(newRow);
}

onLoad();