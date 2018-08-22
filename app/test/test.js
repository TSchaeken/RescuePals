const fetch = require('node-fetch');

// const data = {
//   apikey: 'XWtDGSkY',
//   objectType: 'orgs',
//   objectAction: 'publicSearch',
//   search: {
//     resultStart: '0',
//     resultLimit: '5',
//     resultSort: 'orgID',
//     resultOrder: 'asc',
//     filters: [
//       {
//         fieldName: 'orgLocation',
//         operation: 'equals',
//         criteria: '85268'
//       },
//       {
//         fieldName: 'orgLocationDistance',
//         operation: 'lessthan',
//         criteria: '10'
//       }
//     ],
//     fields: ['orgName', 'orgLocation', 'orgPostalcode', 'orgLocationDistance']
//   }
// };

// const data = {
//   apikey: 'XWtDGSkY',
//   objectType: 'animals',
//   objectAction: 'define',
// };

// const data = {
//   apikey: 'XWtDGSkY',
//   objectType: 'animals',
//   objectAction: 'publicSearch',
//   search: {
//     resultStart: '0',
//     resultLimit: '20',
//     resultSort: 'animalID',
//     resultOrder: 'asc',
//     filters: [
//       {
//         fieldName: 'animalLocation',
//         operation: 'equals',
//         criteria: '85268'
//       },
//       {
//         fieldName: 'locationPostalcode',
//         operation: 'equals',
//         criteria: '85268'
//       },
//       {
//         fieldName: 'animalOrgID',
//         operation: 'equals',
//         criteria: '6562'
//       }
//     ],
//     filterProcessing: '(1 or 2) and 3',
//     fields: [
//       'animalName',
//       'animalLocation',
//       'animalOrgID',
//       'locationPostalcode'
//     ]
//   }
// };

const data = {
  objectType: 'animals',
  search: {
    calcFoundRows: 'Yes',
    resultStart: 0,
    resultLimit: 25,
    resultSort: 'animalOrgID',
    resultOrder: 'desc',
    fields: [
      'animalBreed',
      'animalColor',
      'animalName',
      'animalPictures',
      'animalSex',
      'animalStatus',
      'animalDescriptionPlain'
    ],
    filters: [
      {
        fieldName: 'animalSpecies',
        operation: 'equals',
        criteria: 'Dog'
      },
      {
        fieldName: 'animalLocation',
        opertaion: 'equals',
        criteria: '85268'
      },
      {
        fieldName: 'animalOrgID',
        operation: 'equals',
        criteria: '6562'
      },
      {
        fieldName: 'animalStatus',
        operation: 'equals',
        criteria: 'available'
      }
    ]
  },
  apikey: 'XWtDGSkY',
  objectAction: 'publicSearch'
};

fetch('https://api.rescuegroups.org/http/v2.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(res => res.json())
  .then(res => console.log(res.data))
  .catch(error => console.log(error));
