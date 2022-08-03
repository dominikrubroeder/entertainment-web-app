import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { defaultUsers } from '../../data/data';
import Heading from '../../components/Heading';

const WhoIsWatching: NextPage = () => {
  const router = useRouter();

  const profileImageClassNames = `w-40 h-40 flex items-center justify-center bg-app-blue-800 rounded-full border-4 border-transparent cursor-pointer hover:animate-scale-small hover:border-app-primary-red`;

  const onClickHandler = () => {
    // Set selected user
    // Redirect to dashboard
    router.replace('/');
  };

  return (
    <div className="flex items-center justify-center flex-col gap-4 h-screen">
      <Head>
        <title>
          Who is watching | Web entertainment app | frontendmentor.io
        </title>
        <meta
          name="description"
          content="Web entertainment app | challenge by frontendmentor.io, solution by Dominik Rubröder"
        />
      </Head>

      <Heading as="h1">Who is watching?</Heading>

      <ul className="flex flex-wrap gap-4">
        {defaultUsers.map((user, index) => (
          <li key={user.id}>
            <div
              className="grid gap-4 text-center opacity-0 invisible animate-fadeUp"
              style={{ animationDelay: `${index * 400}ms` }}
              onClick={onClickHandler}
            >
              <div
                className={`w-40 h-40 flex items-center justify-center border-4 ${
                  user.isActiveUser
                    ? 'border-app-primary-red'
                    : 'border-transparent'
                } rounded-full cursor-pointer bg-app-blue-800 hover:border-app-primary-red hover:animate-scale-small`}
              >
                {user.image ? (
                  <Image
                    src={user.image}
                    width={160}
                    height={160}
                    alt={`${user.username} profile image`}
                  />
                ) : (
                  'No image.'
                )}
              </div>

              <Heading>{user.username}</Heading>
            </div>
          </li>
        ))}

        <div className={profileImageClassNames}>+</div>
      </ul>
    </div>
  );
};

export default WhoIsWatching;
