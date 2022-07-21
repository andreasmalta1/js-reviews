//data

const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

let personImage = document.getElementById('image')
let personName = document.getElementById('name')
let personJob = document.getElementById('job-position')
let personReview = document.getElementById('review')

let id = 1
let length = reviews.length

let btnNext = document.getElementById('next')
let btnPrevious = document.getElementById('prev')
let btnSurprise = document.getElementById('surprise')
btnNext.addEventListener('click', goNext)
btnPrevious.addEventListener('click', goPrevious)
btnSurprise.addEventListener('click', randomReview)

function goNext(){
  id += 1
  if (id > length){
    id = 1
  }
  changeReview()
}

function goPrevious(){
  id -= 1
  if (id <= 0){
    id = length
  }
  changeReview()
}

function changeReview(){
  imageSrc = reviews[id-1]['img']
  nameText = reviews[id-1]['name']
  jobText = reviews[id-1]['job']
  reviewText = reviews[id-1]['text']
  personImage.src = imageSrc;
  personName.innerHTML = nameText
  personJob.innerHTML = jobText
  personReview.innerHTML = reviewText

}


1 - 4

function randomReview(){
  do {
    x = Math.floor((Math.random() * length) + 1);
    console.log(x)
  }
  while (x == id);
  id = x
  changeReview()
}

window.addEventListener('DOMContentLoaded', function (){
  changeReview()
})

