export function ageCheck(age) {
  if (!age) {
    return 'Error: no age'; // early exit -> hier die no age nach oben und nicht in die andere kette mit rein. wenn die true ist, wird der rest nciht mehr ausgeführt.
  }

  {
    if (age < 16) return 'Too young!';
    else if (age === 16 || age === 17) return 'Not quite old enough!';
    else return 'Old enough!';
  }
}
