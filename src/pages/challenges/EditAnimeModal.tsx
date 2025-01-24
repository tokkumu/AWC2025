import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { AnimeData, AnimeDetails } from '../../types';

type EditDataModalProps = {
  open?: boolean;
  malId: string;
  animeData: AnimeData;
  onSave: (updatedData: AnimeDetails) => void;
  onClose: () => void;
};

const EditAnimeModal: React.FC<EditDataModalProps> = ({
  open,
  onClose,
  malId,
  animeData,
  onSave,
}) => {
  const [formData, setFormData] = useState<AnimeDetails>(animeData[malId]);

  useEffect(() => {
    if (open && malId) {
      setFormData(animeData[malId]);
    }
  }, [open]);

  const handleChange = (name: string, value: string | string[] | number) => {
    const path = name.split('.');

    const updatedFormData = {
      ...formData,
      aired: {
        ...formData.aired,
        from: {
          ...formData.aired.from,
        },
        to: {
          ...formData.aired.to,
        },
      },
    };

    path.reduce((acc, key, index) => {
      if (index === path.length - 1) {
        acc[key] = value;
      }
      return acc[key];
    }, updatedFormData as any);

    setFormData(updatedFormData);
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open ?? false} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Edit Data</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Useful if needing to enter historical data (such as if genres change)
        </Typography>
        <br />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="MAL Id"
              name="malId"
              value={formData?.malId}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData?.title}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Type"
              name="type"
              value={formData?.type}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Source"
              name="source"
              value={formData?.source}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Episodes"
              name="episodes"
              value={formData?.episodes}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Status"
              name="status"
              value={formData?.status}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Duration"
              name="duration"
              value={formData?.duration}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Aired Day"
              name="aired.day"
              value={formData?.aired?.day}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Aired Time"
              name="aired.time"
              value={formData?.aired?.time}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Aired From Year"
              name="aired.from.year"
              value={formData?.aired?.from?.year}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Aired From Month"
              name="aired.from.month"
              value={formData?.aired?.from?.month}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Aired From Day"
              name="aired.from.day"
              value={formData?.aired?.from?.day}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Aired To Year"
              name="aired.to.year"
              value={formData?.aired?.to?.year}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Aired To Month"
              name="aired.to.month"
              value={formData?.aired?.to?.month}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Aired To Day"
              name="aired.to.day"
              value={formData?.aired?.to?.day}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Rating"
              name="rating"
              value={formData?.rating}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Score"
              name="score"
              value={formData?.score}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Rank"
              name="rank"
              value={formData?.rank}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Popularity"
              name="popularity"
              value={formData?.popularity}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Members"
              name="members"
              value={formData?.members}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Favorites"
              name="favorites"
              value={formData?.favorites}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Season"
              name="season"
              value={formData?.season}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Year"
              name="year"
              value={formData?.year}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Genres"
              name="genres"
              value={formData?.genres?.join(',')}
              onChange={(e) =>
                handleChange(e.target.name, e.target.value.split(','))
              }
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Themes"
              name="themes"
              value={formData?.themes?.join(',')}
              onChange={(e) =>
                handleChange(e.target.name, e.target.value.split(','))
              }
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Demographics"
              name="demographics"
              value={formData?.demographics?.join(',')}
              onChange={(e) =>
                handleChange(e.target.name, e.target.value.split(','))
              }
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Opening Count"
              name="openingCount"
              value={formData?.openingCount}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Ending Count"
              name="endingCount"
              value={formData?.endingCount}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Main Characters"
              name="mainCharacters"
              value={formData?.mainCharacters}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              fullWidth
              label="Supporting Characters"
              name="supportingCharacters"
              value={formData?.supportingCharacters}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="number"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditAnimeModal;
