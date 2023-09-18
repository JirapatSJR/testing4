const CKposter = ({ content }) => {
  return (
    <div className="lg:pl-4">
      <div
        className="w-full relative text-white4wd ck-content"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </div>
  );
};

export default CKposter;
