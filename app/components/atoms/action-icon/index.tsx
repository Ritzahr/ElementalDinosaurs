const ActionIcon = ({ type }:string) => {
 return (
  <>
    {type === 'claw' && (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M233.156 36.156c-6.48-.048-13.395 1.184-20.47 3.625-16.957 5.854-33.577 18.887-43.467 36.157 77.39 68.916 107.53 126.832 108.06 219.25 43.458-77.778 36.565-167.55-17.217-248.218-6.928-7.206-16.306-10.736-26.907-10.814zm93.78 35.375c-6.478-.047-13.393 1.185-20.467 3.626-2.493.86-4.982 1.902-7.44 3.063 14.802 31.958 23.134 65.038 24.75 97.936 32.99 45.06 46.945 91.825 47.314 154.375 43.432-77.787 36.5-167.58-17.313-248.25-6.92-7.15-16.28-10.67-26.842-10.75zm70.783 49.564c-.51-.004-1.018.02-1.533.03 19.362 45.11 25.912 92.202 19.032 137.75 18.285 35.42 26.38 73.767 26.655 121.22 43.436-77.79 36.502-167.58-17.313-248.25-6.92-7.15-16.282-10.672-26.843-10.75zM86.905 235.064c-9.708.257-19.153 2.586-27.125 6.467-14.347 6.987-22.985 17.96-22.81 30.595 8.884 44.736 21.04 77.706 40.718 100.688 16.145 18.856 37.66 31.635 68.406 39.156-39.886-58.353-46.966-90.635-41.688-175.033-4.366-1.084-8.854-1.69-13.312-1.843-1.394-.05-2.8-.068-4.188-.03z"></path></g></svg>
    )} {type === 'return' && (

      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <path d="M10,22v2c0,7.72,6.28,14,14,14s14-6.28,14-14s-6.28-14-14-14h-6.662l3.474-4.298l-3.11-2.515L10.577,12l7.125,8.813 l3.11-2.515L17.338,14H24c5.514,0,10,4.486,10,10s-4.486,10-10,10s-10-4.486-10-10v-2H10z"></path> </g> </g></svg>
    )}
    {type === 'shield' && (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7L12 3L20 7C20 12.1932 17.2157 19.5098 12 21C6.78428 19.5098 4 12.1932 4 7Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    )}
  </>
 )
};

export { ActionIcon };
