const getLocation = () => {
  var location: GwizdLocation = {
    id: 0,
    latitude: "",
    longitude: "",
  };
  const success = (position: any) => {
    location.latitude = position.coords.latitude;
    location.longitude = position.coords.longitude;
  };
  const error = () => {
    console.log("Error locating user");
  };
  navigator.geolocation.getCurrentPosition(success, error);
  return location;
};
export default getLocation;
