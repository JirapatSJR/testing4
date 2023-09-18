import Container from '../../shared2/Container';
import Header from '../../shared2/Header';

const RelatedArticles = ({ header, articles }) => {
  return (
    <Container>
      <div className="bg-gray-100 my-40">
        <Header {...header} />
        <div className="w-4/5 mx-auto py-16">
        </div>
      </div>
    </Container>
  );
};

RelatedArticles.defaultProps = {};

export default RelatedArticles;
