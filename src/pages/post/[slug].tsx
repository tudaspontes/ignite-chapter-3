import { GetStaticPaths, GetStaticProps } from 'next';
import Header from '../../components/Header';
import {FiCalendar, FiUser, FiClock} from 'react-icons/fi'

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({post}: PostProps) {
  return (
    <>
      <Header />
      <img src="/teste.png" alt="image" className={styles.banner}/>
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum titulo de exemplo</h1>
              <ul>
                <li>
                  <FiCalendar />
                  15 Mar 2021
                </li>
                <li>
                  <FiUser />
                  Felipe Pontes
                </li>
                <li>
                  <FiClock />
                  4 min
                </li>
              </ul>
          </div>   

          <article>
            <h2>Titulo seção</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Architecto iste error officia, exercitationem expedita atque deserunt, 
              nihil consequatur natus ab corporis in perspiciatis quos velit maxime ut. 
              Omnis dolorem dolores accusantium, ipsum soluta minus velit rem sunt possimus 
              laborum corrupti expedita, dignissimos commodi quos alias nostrum iure vitae illum praesentium 
              debitis quam doloremque quisquam quis corporis. Itaque quaerat rerum nulla quis omnis reprehenderit, 
              similique consequatur culpa illo! Nam, quis, enim alias porro velit sapiente odit magni laboriosam unde neque quibusdam?
            </p>
          </article>
        </div>
      </main>
    </>
  )
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
