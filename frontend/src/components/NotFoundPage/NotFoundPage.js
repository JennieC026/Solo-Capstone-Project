import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className="not-found-page-component">
        <div className='not-found-page-image-text-container'>
      <div className='not-found-page-text'>
        404: Can't Go yet, We can't find the page you're looking for.
      </div>
      <div className='not-found-page-image-container'>
        <img className='not-found-page-image' src='https://storage.googleapis.com/jennie_profolio/capstone_amberEat/404%20copy-.png' />
      </div>
      </div>
    </div>
  );
}

export default NotFoundPage;