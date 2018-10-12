const katzDeliLine = [];

const takeANumber = (line, name) => {
    line.push(name);
    return line;
};

const nowServing = (line) => {
  return line.unshift();
};

const currentLine = (line) => {
  return katzDeliLine.toString();
};
