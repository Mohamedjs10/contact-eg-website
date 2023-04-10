import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Autocomplete as AutocompleteInput } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";
import { colors } from "../../utils/const";
import en from "../../../locales/en";
import ar from "../../../locales/ar";
import {
  GoogleMap,
  LoadScript,
  ScriptLoaded,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];

const markers = [
  {
    id: 1,
    name: "Chicago, Illinois",
    position: { lat: 30.20876, lng: 31.18906 },
  },
  {
    id: 2,
    name: "Denver, Colorado",
    position: { lat: 30.09776, lng: 31.42906 },
  },
  {
    id: 3,
    name: "Los Angeles, California",
    position: { lat: 30.09776, lng: 31.32906 },
  },
  {
    id: 4,
    name: "New York, New York",
    position: { lat: 30.08776, lng: 31.32906 },
  },
  { id: 5, position: { lat: 30.04048, lng: 31.20948 } },
];

const mapContainerStyle = {
  height: "500px",
  width: "80%",
  margin: "auto",
  transform: "translateY(-150px)",
};

export default function MapBox() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  const [mapInstance, setMapInstance] = useState(false);
  const [branch, setBranch] = useState("");

  const onLoad = (marker) => {};

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };
  return (
    <Box>
      <Box
        sx={{
          background: "#2D317F",
          pt: 10,
          pb: 30,
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
        }}
        className="horizontal-safe-padding"
      >
        <Box
          sx={{
            textAlign: {
              xs: "center",
              md: t.textAlign,
            },
          }}
        >
          <Typography variant="h6">{t.map.title}</Typography>
          <Typography variant="subtitle">{t.map.subTitle}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
          }}
        >
          <Box>
            <AutocompleteInput
              size="small"
              disablePortal
              id="search-box"
              options={top100Films}
              sx={{
                width: 250,
                mx: 1,
                mt: {
                  xs: 3,
                  md: 1,
                },
              }}
              classes={{
                "& span": {
                  "& svg": {
                    "& path": {
                      d: "path('M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z')",
                    },
                  },
                },
              }}
              renderInput={(params) => (
                <TextField
                  placeholder={t.map.placeholderGovernate}
                  sx={{
                    borderRadius: 1,
                    bgcolor: "white",
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "lightgrey",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                      },
                    },
                  }}
                  {...params}
                />
              )}
            />
          </Box>

          <Select
            IconComponent={() => (
              <Box
                component="img"
                src="/images/Icon.png"
                sx={{
                  width: 15,
                  display: "inline-block",
                  mx: 1,
                }}
              />
            )}
            sx={{
              borderRadius: 1,
              bgcolor: "white",
              width: 250,
              mx: 1,
              mt: 1,
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              ".MuiSvgIcon-root ": {
                fill: "white !important",
              },
            }}
            size="small"
            defaultValue="none"
            onChange={handleBranchChange}
          >
            <MenuItem sx={{ color: "#bcbcbc" }} value="none" disabled>
              {t.map.placeholderBranch}
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box sx={{ background: "white" }}>
        <LoadScript googleMapsApiKey="AIzaSyBUQUZh1KHcrl2R-tbouYTowdRxjZcLODE">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={{ lat: 30.04048, lng: 31.20948 }}
            zoom={10}
            onLoad={(map) => setTimeout(() => setMapInstance(map))}
          >
            {mapInstance &&
              markers.map(({ id, name, position }) => (
                <Marker
                  key={id}
                  position={position}
                  onLoad={onLoad}
                  onClick={() => console.log(position)}
                  icon={
                    "/images/marker.png"
                    // "https://cdn.iconscout.com/icon/premium/png-512-thumb/map-824-341998.png?f=avif&w=42"
                  }
                />
              ))}
          </GoogleMap>
        </LoadScript>
      </Box>
    </Box>
  );
}
