const fakeUser = {
  username: 'chaevid',
  loggedIn: false,
};

export const trending = (req, res) => {
  const videos = [
    {
      id: 1,
      title: 'Zelda',
      rating: 5.0,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
    },
    {
      id: 2,
      title: 'Naruto',
      rating: 4.9,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
    },
    {
      id: 3,
      title: 'Pokémon',
      rating: 4.5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
    },
  ];

  return res.render('home', { pageTitle: 'Home', fakeUser, videos }); // ES6
};

export const search = (req, res) => res.send('Search Video');
export const see = (req, res) =>
  res.render('watch', { pageTitle: 'Watch', videoId: req.params.id });
export const edit = (req, res) =>
  res.render('edit', { pageTitle: 'Watch', videoId: req.params.id });
export const deleteVideo = (req, res) => res.send('Delete Video');
export const upload = (req, res) => res.send('Upload Video');
