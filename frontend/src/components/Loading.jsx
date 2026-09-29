function Loading({ message = 'Loading...' }) {
  return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status" aria-label="Loading"></div>
      <p className="mt-3 text-secondary">{message}</p>
    </div>
  );
}

export default Loading;
