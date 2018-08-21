const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];


const createPostCard = ({img, title, text, link}) => {
  const post = document.createElement('div');
  post.classList.add('post');


  const pic = document.createElement('img');
  pic.classList.add('post__image');
  pic.setAttribute('src', img);
  pic.setAttribute('alt', '');

  const name = document.createElement('h2');
  name.classList.add('post__title');
  name.textContent = title;

  const textContent = document.createElement('p');
  textContent.classList.add('post__text');
  textContent.textContent = text;

  const button = document.createElement('a');
  button.classList.add('button');
  button.textContent = link;


  post.append (pic, name, textContent, button);
  return post;
}


const createCards = (posts) => {
  const newPost = posts.map(postIt=>createPostCard(postIt));
  return newPost;
};

const card = document.querySelector('.card');
const postCard = createCards(posts);

console.log (postCard)
card.append(...postCard);

