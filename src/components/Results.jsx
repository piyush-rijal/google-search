import React from "react";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ResultContext } from "../contexts/ResultContextProvider";
import {
  Card,
  Stack,
  Heading,
  Divider,
  CardBody,
  Image,
  Text,
} from "@chakra-ui/react";
function Results() {
  const { getResults, searchTerm, results } = useContext(ResultContext);
  const location = useLocation();
//   console.log(results, location.pathname);
  // useEffect(() => {
  //   getResults("/images?q=apple");
  // }, []);

//   useEffect(() => {
//     if (location.pathname === "./videos") {
//       getResults(`/search?q=${searchTerm} videos`);
//     } else {
//       getResults(`${location.pathname}?q=${searchTerm}`);
//     }
//   }, [searchTerm, location.pathname]);

  switch (location.pathname) {
    case "/search":
      return (
        <>
          {results?.map(({ link, title }, index) => (
            <div key={index} target="_blank">
              <a href={link}>
                <p>{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p>{title}</p>
              </a>
            </div>
          ))}
        </>
      );
    case "/news":
      return (
        <>
          {results?.map(({ link, title, imageUrl, snippet }, index) => (
            <>
              <Card key={index} maxW="sm">
                <CardBody>
                  <Image src={imageUrl} alt="News Image" borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{title}</Heading>
                    <Text>{snippet}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <a href={link}>
                  <p>{link.length > 30 ? link.substring(0, 30) : link}</p>
                </a>
              </Card>
            </>
          ))}
        </>
      );
    case "/images":
      return (
        <>
          {results?.map(({ title, imageUrl, link }, index) => (
            <>
              <Card
                key={index}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={imageUrl}
                  alt="Caffe Latte"
                />
                <Stack>
                  <CardBody>
                    <Heading size="md">{title}</Heading>
                    <a href={link}>
                      <p>{link.length > 30 ? link.substring(0, 30) : link}</p>
                    </a>
                  </CardBody>
                </Stack>
              </Card>
            </>
          ))}
        </>
      );
    case "/videos":
      return (
        <>
          {results?.map(({ title, link }, index) => (
            <>
              <div key={index}>{title}</div>
              <a href={link}>
                <p>{link.length > 30 ? link.substring(0, 30) : link}</p>
              </a>
            </>
          ))}
        </>
      );
    default:
      break;
  }
  return <div></div>;
}

export default Results;
