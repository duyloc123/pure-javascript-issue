const issuesList = document.getElementById('issuesList');

let issues = [
  {
    id: 1,
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    author: 'tony',
    severity: 'low',
    status: 'new'
  }
];

// TODO: render UI list todos
/*
<div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
  <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Low</span>
  <div class="flex items-center mb-2">
    <h5 class="mr-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
    <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">new</span>
  </div>
  <p class="mb-5 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <div class="flex justify-between">
    <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-2" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
      <div>Tony</div>
    </div>
    <div>
      <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Close
      </button>
      <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
        Delete
      </button>
    </div>
  </div>
</div>
*/
/* rule functions - pure function 
- not side effects
- same input -> same output
*/
function renderIssues(dataSource = []) {
  const parentEle = document.createElement('div');
  parentEle.setAttribute('class', 'w-full p-6 bg-white border border-gray-200 rounded-lg shadow');

  const severityEle = document.createElement('span');
  severityEle.setAttribute('class', 'bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300');
  severityEle.textContent = 'Low';


  parentEle.appendChild(severityEle);

  issuesList.appendChild(parentEle);
}


renderIssues();