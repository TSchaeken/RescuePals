export function fetchPets() {
  const data = {
    objectType: 'animals',
    search: {
      calcFoundRows: 'Yes',
      resultStart: 0,
      resultLimit: 25,
      resultSort: 'animalOrgID',
      resultOrder: 'desc',
      fields: [
        'animalName',
        'animalBreed',
        'animalColor',
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

  return fetch('https://api.rescuegroups.org/http/v2.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res =>
      Object.keys(res.data).map(key => {
        return res.data[key];
      })
    )
    .catch(error => console.log(error));
}
