import '../style/Loading.scss';

function Loading() {
  return (
    <div className="background-color">
    <div className="loader-body">
      <div className="loader__filmstrip">
      </div>
      <p class="loader__text">
          loading...
      </p>
    </div>
    </div>
  );
}

export default Loading;
