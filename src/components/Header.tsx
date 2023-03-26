/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header = () => {
   const { data: sessionData } = useSession();

   return (
      <div className="navbar bg-primary text-primary-content">
         <div className="flex-1 pl-5 text-3xl font-bold">
            {sessionData?.user.name
               ? 'Notes for ' + sessionData?.user.name
               : ''}
         </div>
         <div className="dropdown-end dropdown">
            {sessionData?.user ? (
               <label
                  tabIndex={0}
                  className="btn-ghost btn-circle avatar btn"
                  onClick={() => void signOut()}
               >
                  <div className="w-10 rounded-full">
                     <img
                        src={sessionData.user?.image ?? ''}
                        alt={sessionData?.user?.name ?? ''}
                     />
                  </div>
               </label>
            ) : (
               <button
                  className="btn-ghost btn rounded-full"
                  onClick={() => void signIn()}
               >
                  Sign In
               </button>
            )}
         </div>
      </div>
   );
};

export default Header;