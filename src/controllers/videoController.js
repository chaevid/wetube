const fakeUser = {
  username: 'chaevid',
  loggedIn: false,
};

export const trending = (req, res) =>
  res.render('home', { pageTitle: 'Home', fakeUser }); // ES6
export const search = (req, res) => res.send('Search Video');
export const see = (req, res) =>
  res.render('watch', { pageTitle: 'Watch', videoId: req.params.id });
export const edit = (req, res) =>
  res.render('edit', { pageTitle: 'Watch', videoId: req.params.id });
export const deleteVideo = (req, res) => res.send('Delete Video');
export const upload = (req, res) => res.send('Upload Video');
