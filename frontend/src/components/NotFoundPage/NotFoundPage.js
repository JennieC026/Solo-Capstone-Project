import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className="not-found-page-component">
        <div className='not-found-page-image-text-container'>
      <div className='not-found-page-text'>
        404: Can't Go yet, We can't find the page you're looking for.
      </div>
      <div className='not-found-page-image-container'>
        <img className='not-found-page-image' src='https://cdn.discordapp.com/attachments/811082976501825539/1154719561652903986/404_copy-.png' />
      </div>
      </div>
    </div>
  );
}

export default NotFoundPage;