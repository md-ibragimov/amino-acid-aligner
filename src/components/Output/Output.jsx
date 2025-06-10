import { Container, Stack } from "@mui/material";
import './output.scss';
import { useId } from "react";

export default function Form({ firstValue, secondValue }) {
  

  const handleAminoAcid = function (letter) {
    if (letter === 'C') {
      return 'cysteine-color';
    } else if (['A', 'I', 'L', 'M', 'F', 'W', 'Y', 'V', 'P'].includes(letter)) {
      return 'hydrophobic-color';
    } else if (letter === 'G') {
      return 'glycine-color';
    } else if (['D', 'E'].includes(letter)) {
      return 'negatively-charged-color';
    } else if (['K', 'R'].includes(letter)) {
      return 'positive-charged-color';
    } else if (['S', 'T', 'H', 'Q', 'N'].includes(letter)) {
      return 'polar-uncharged-color';
    } else {
      return null;
    }
  }

  const compareAminoAcit = function(first, second, index) {
    if (first !== '-' || second !== '-') {
      return handleAminoAcid(first[index]) !== handleAminoAcid(second[index]) && handleAminoAcid(second[index])
    }
    return null
  }


  return (
    <Container >
      <Stack direction='row'git  sx={{flexWrap: 'wrap'}}>
        {[...firstValue].map(letter => (
          <span
            className={`letter-wrapper ${handleAminoAcid(letter)}`}
            key={Date.now()}
          >{letter}</span>
        ))}
      </Stack>
      <Stack direction='row'git  sx={{flexWrap: 'wrap'}}>
        {[...secondValue].map((letter, index) => (
          <span
            className={`letter-wrapper ${compareAminoAcit(firstValue, secondValue, index)}`}
            key={Date.now()}
          >{letter}</span>
        ))}
      </Stack >
    </Container>
  );
}