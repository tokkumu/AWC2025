import { AnimeExport, ImportProps } from './types';
import ListImport from './ListImport';
import { useState } from 'react';
import ImportTable from './ImportTable';

const Import = (props: ImportProps) => {
  const [data, setData] = useState<AnimeExport[]>([]);

  return (
    <div>
      <ListImport {...props} setData={setData} />
      <ImportTable challengeData={props.challengeData} data={data} />
    </div>
  );
};

export default Import;
