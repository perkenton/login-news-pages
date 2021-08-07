export type ProfilesData = {
  id: number,
  login: string,
  password: string,
  access: string[],
  avatar: string
}

export const profilesData: ProfilesData[] = [
  {
    id: 1,
    login: 'Admin',
    password: '12345',
    access: ['смотреть профиль', 'править новости'],
    avatar: 'https://juanbustos.com/wp-content/uploads/2021/01/jb-editor-de-video.jpg'
  }
]