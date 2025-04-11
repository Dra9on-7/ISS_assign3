function analyzeText() {
    const text = document.getElementById("textInput").value;
    const output = document.getElementById("output");

    const letters = (text.match(/[a-zA-Z]/g) || []).length;
    const words = (text.match(/\b\w+\b/g) || []).length;
    const spaces = (text.match(/ /g) || []).length;
    const newlines = (text.match(/\n/g) || []).length;
    const specialSymbols = (text.match(/[^\w\s]/g) || []).length;

    const tokens = text.toLowerCase().match(/\b\w+\b/g) || [];

    const pronounsList = ['i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'its', 'our', 'their'];
    const prepositionsList = ['in', 'on', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'over', 'under', 'again', 'further'];
    const articlesList = ['a', 'an'];

    const countWords = (list) => {
      const map = {};
      list.forEach(word => {
        map[word] = 0;
      });
      tokens.forEach(token => {
        if (list.includes(token)) {
          map[token]++;
        }
      });
      return map;
    };

    const pronounCounts = countWords(pronounsList);
    const prepositionCounts = countWords(prepositionsList);
    const articleCounts = countWords(articlesList);

    // Create display output
    let result = `===== Text Statistics =====
Letters: ${letters}
Words: ${words}
Spaces: ${spaces}
Newlines: ${newlines}
Special Symbols: ${specialSymbols}

===== Pronoun Counts =====
`;
    for (const [key, value] of Object.entries(pronounCounts)) {
      if (value > 0) result += `${key}: ${value}\n`;
    }

    result += `\n===== Preposition Counts =====\n`;
    for (const [key, value] of Object.entries(prepositionCounts)) {
      if (value > 0) result += `${key}: ${value}\n`;
    }

    result += `\n===== Indefinite Article Counts =====\n`;
    for (const [key, value] of Object.entries(articleCounts)) {
      if (value > 0) result += `${key}: ${value}\n`;
    }

    output.textContent = result;
  }