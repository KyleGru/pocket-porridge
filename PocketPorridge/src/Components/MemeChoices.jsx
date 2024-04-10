import "./MemeChoices.css";
import { useState, useEffect } from "react";
import { TextInputModal } from "./TextInputModal";
import axios from "axios";
import _ from "underscore";

export function MemeChoices() {
  const [memes, setMemes] = useState([]);
  const [textInput, setTextInput] = useState(false);
  let matchMemeArray = [];

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await axios.get("https://api.imgflip.com/get_memes");
        const { memes } = response.data.data;
        console.log(memes);
        sortMemes(memes)
        // setMemes(memes);
      } catch (error) {
        console.error("Error fetching memes", error);
      }
    };
    fetchMemes();

    const sortMemes = async (memes) => {
      let memeSelectionArray = [
        222403160, 4087833, 135256802, 97984, 247375501, 91538330, 110163934,
        102156234, 61579, 101470, 61544, 3218037, 370867422, 27813981,
        224015000, 316466202, 28251713, 100777631, 252758727, 259237855,
        166969924, 177682295, 247113703, 101956210, 155067746, 224514655,
        216523697, 77045868, 101288, 67452763, 61556, 5496396, 61520, 110133729,
        14371066, 29617627, 342785297, 196652226, 61532, 187102311, 175540452,
        509760957, 92084495, 438680, 20007896, 50421420, 87743020, 112126428,
        119139145, 124055727, 124822590, 131087935, 162372564, 180190441,
        181913649, 217743513, 511654183,
      ];

      console.log(memeSelectionArray);
      await memes.forEach((id) => {
        let extractId = [JSON.parse(id.id)];
        let matches = _.intersection(memeSelectionArray, extractId);
        if (matches.length !== 0) {
          matchMemeArray.push(id);
          setMemes(matchMemeArray);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="choiceFlex">
        {memes.map((meme, index) => (
          <div key={index}>
            <button
              className="memeBox"
              onClick={() => {
                setTextInput(true);
                const value = meme.id;
                localStorage.setItem("selectedMeme", value);
                console.log(value);
              }}
            >
              <img className="memeImg" src={meme.url} alt={meme.name} />
            </button>
          </div>
        ))}
      </div>

      <TextInputModal 
                show={textInput}
                onClose={() => setTextInput(false)}
                />
    </>
  );
}
