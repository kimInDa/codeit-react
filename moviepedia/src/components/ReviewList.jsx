import './ReviewList.css';

function formatDate(value) {
  console.log(value);
  const date = new Date(value);
  console.log(date);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item }) {
  return (
    <div className='ReviewListItem'>
      <img className='ReviewListItem-img' src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
      </div>
    </div>
  );
}

function ReviewList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <ReviewListItem key={items.id} item={item} />;
      })}
    </ul>
  );
}
export default ReviewList;
