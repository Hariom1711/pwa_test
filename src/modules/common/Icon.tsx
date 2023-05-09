import React, { useState, useEffect } from 'react';
import { db } from '../../db';

interface IconProps {
  name: string;
}

function Icon(props: IconProps) {
  const { name } = props;
  const [iconDataUrl, setIconDataUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetchIcon() {
      const icon = await db.icons.get({ name });
      if (icon) {
        setIconDataUrl(icon.dataUrl);
      } else {
        console.warn(`Icon not found: ${name}`);
      }
    }
    fetchIcon();
  }, [name]);

  return (
    <img src={iconDataUrl} alt={name} />
  );
}

export default Icon;
