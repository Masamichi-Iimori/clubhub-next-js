import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { Button, Fab, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Modal, Radio, RadioGroup, TextField, Tooltip } from '@material-ui/core'
import GroupAddIcon from '@material-ui/icons/GroupAdd';

import { tweetModalOperations } from '@/ducks/tweet-modal/operations';
import tweetModalSlice from '@/ducks/tweet-modal/slice';
import { useTweetModalState } from '@/ducks/tweet-modal/selectors';
import { styles } from './styles'
import React from 'react';

type Props = {};

const TweetModal: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const state = useTweetModalState().tweetModal;
  const classes = styles();


  interface ITweetOptions {
    activityFrequencies: Array<string>,
    activityStartTimes: Array<string>,
    activityEndTimes: Array<string>,
    positions: Array<string>,
    formations: Array<string>,
  }


  const tweetOptions: ITweetOptions = {
    activityFrequencies: ['週1～2回', '週3～4回', '週5回以上'],
    activityStartTimes: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
      '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    activityEndTimes: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
      '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    positions: ['全て', 'FW', 'MF', 'DF', 'GK', 'ST', 'CF', 'LW', 'RW', 'CAM', 'CM', 'LM', 'RM', 'CDM',
      'LWB', 'RWB', 'LB', 'RB', 'CB',],
    formations: ['そのときに応じて変更', '4-3-3', '4-2-2-2', '4-2-3-1', '4-4-2', '5-3-2', '5-4-1', '3-5-2', '3-4-3'],
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'freeComment':
        dispatch(tweetModalOperations.updateFreeComment(event.target.value));
        break;
    }
  };

  const handleSelect = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
  ) => {
    switch (event.target.name) {
      case 'activityFrequency':
        return dispatch(
          tweetModalOperations.updateActiveFrequency(
            event.target.value ? (event.target.value as string) : '',
          ),
        );
      case 'activityStartTime':
        return dispatch(
          tweetModalOperations.updateActiveStartTime(
            event.target.value ? (event.target.value as string) : '',
          ),
        );
      case 'activityEndTime':
        return dispatch(
          tweetModalOperations.updateActiveEndTime(
            event.target.value ? (event.target.value as string) : '',
          ),
        );
      case 'positions':
        return dispatch(
          tweetModalOperations.updatePositions(
            event.target.value ? (event.target.value as string) : '',
          ),
        );
      case 'formation':
        return dispatch(
          tweetModalOperations.updateFormation(
            event.target.value ? (event.target.value as string) : '',
          ),
        );
      case 'voiceChat':
        return dispatch(
          tweetModalOperations.updateVoiceChat(
            event.target.value ? (event.target.value as string) : '',
          ),
        );
    }
  };

  return (
    <div>
      <Tooltip title="クラブメンバーを募集" aria-label="クラブメンバーを募集" >
        <Fab color="primary" className={classes.fab}>
          <GroupAddIcon style={{ fontSize: 40 }} onClick={() => dispatch(tweetModalOperations.openModal())} />
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={state.open}
        onClose={() => dispatch(tweetModalOperations.closeModal())}
      >
        <div className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={3} justify='center' alignItems='center' >
              <Grid item xs={12} className={classes.centerGrid}>
                <TextField
                  id="select-activityFrequency"
                  select
                  label="活動頻度"
                  name="activityFrequency"
                  value={state.activeFrequency}
                  onChange={handleSelect}
                  helperText="活動頻度を選択してください"
                >
                  {tweetOptions.activityFrequencies.map((currentActivityFrequency: string) => (
                    <MenuItem key={currentActivityFrequency} value={currentActivityFrequency}>
                      {currentActivityFrequency}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.selecter}>
                  <TextField
                    id="select-activityStartTime"
                    select
                    label="活動開始時間"
                    name="activityStartTime"
                    value={state.activeStartTime}
                    onChange={handleSelect}
                  >
                    {tweetOptions.activityStartTimes.map((currentActivityStartTime: string) => (
                      <MenuItem key={currentActivityStartTime} value={currentActivityStartTime}>
                        {currentActivityStartTime}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id="select-activityEndTime"
                    select
                    label="活動終了時間"
                    name="activityEndTime"
                    value={state.activeEndTime}
                    onChange={handleSelect}
                    helperText=""

                  >
                    {tweetOptions.activityEndTimes.map((currentActivityEndTime: string) => (
                      <MenuItem key={currentActivityEndTime} value={currentActivityEndTime}>
                        {currentActivityEndTime}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

              </Grid>
              <Grid item xs={12} >
                <div className={classes.selecter}>
                  <TextField
                    id="select-position"
                    select
                    label="募集ポジション"
                    name="positions"
                    value={state.positions}
                    onChange={handleSelect}

                  >
                    {tweetOptions.positions.map((currentPosition: string) => (
                      <MenuItem key={currentPosition} value={currentPosition}>
                        {currentPosition}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id="select-formation"
                    select
                    label="フォーメーション"
                    name="formation"
                    value={state.formation}
                    onChange={handleSelect}

                  >
                    {tweetOptions.formations.map((currentFormation: string) => (
                      <MenuItem key={currentFormation} value={currentFormation}>
                        {currentFormation}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

              </Grid>
              <Grid item xs={12} className={classes.centerGrid}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" className={classes.vclabel}>VC選択</FormLabel>
                  <RadioGroup aria-label="voiceChat" name="voiceChat" value={state.voiceChat} onChange={handleSelect} row>
                    <FormControlLabel
                      value="PS4"
                      control={<Radio color="primary" />}
                      label="PS4"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="DisCord"
                      control={<Radio color="primary" />}
                      label="DisCord"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="VC不可"
                      control={<Radio color="primary" />}
                      label="VC不可"
                      labelPlacement="top"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} className={classes.centerGrid}>
                <TextField
                  required={false}
                  value={state.freeComment}
                  onChange={handleInput}
                  multiline
                  rows={3}
                  label={"自由記述"}
                  name="freeComment"
                  variant='outlined'
                  className={classes.textField}
                  fullWidth
                />
              </Grid>
            </Grid>

            <div className={classes.buttonbox}>
              <Button variant="contained" color="primary" href={`http://twitter.com/share?url=https://clubhub.ga&text=プロクラブのメンバーを募集します！%0a募集ポジション：${state.positions}%0aフォーメーション：${state.formation}%0a活動頻度：${state.activeFrequency}
               %0a活動時間帯：${state.activeStartTime} ～${state.activeEndTime}%0aボイスチャット：${state.voiceChat}%0a${state.freeComment} %0a &hashtags=${["プロクラブ", "FIFA21"]}`} className={classes.tweetbutton} data-url="https://clubhub.ga" data-show-count="false" target="_blank" rel="noopener noreferrer">
                募集する
              </Button>
              <Button variant="contained" onClick={() => dispatch(tweetModalOperations.closeModal())} className={classes.cancelbutton}>キャンセル</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div >
  );
}

export default TweetModal