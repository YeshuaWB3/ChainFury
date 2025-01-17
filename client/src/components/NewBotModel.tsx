import { Button, Dialog } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStates } from '../redux/hooks/dispatchHooks';
import { useAppDispatch } from '../redux/hooks/store';
import { useGetTemplatesMutation } from '../redux/services/auth';
import { setTemplates } from '../redux/slices/authSlice';
import ChatBotCard from './ChatBotCard';
import SvgClose from './SvgComps/Close';

const NewBotModel = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();
  const [botName, setBotName] = useState('');
  const [selectedFlow, setSelectedFlow] = useState('scratch');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const { auth } = useAuthStates();

  return (
    <Dialog open={true} onClose={onClose}>
      <div
        className={`prose-nbx relative  gap-[16px] p-[16px] flex flex-col justify-center items-center w-[500px]`}
      >
        <SvgClose
          onClick={onClose}
          className="stroke-light-neutral-grey-900 absolute right-[8px] top-[8px] scale-[1.2] cursor-pointer"
        />
        <input
          onChange={(e) => {
            setBotName(e.target.value?.replace(' ', '_'));
          }}
          value={botName}
          type="text"
          placeholder="Name"
          className="h-[40px] w-full mt-[16px]"
        />
        <div className="flex justify-between gap-[8px] w-full">
          <div
            onClick={() => {
              setSelectedFlow('scratch');
            }}
            className={`${
              selectedFlow === 'scratch'
                ? 'border-light-primary-blue-400 bg-light-primary-blue-50'
                : ''
            } p-[16px] w-[50%] border-light-neutral-grey-200 rounded-md border cursor-pointer`}
          >
            Start from scratch
          </div>
          <div
            onClick={() => {
              setSelectedFlow('template');
            }}
            className={`${
              selectedFlow !== 'scratch'
                ? 'border-light-primary-blue-400 bg-light-primary-blue-50'
                : ''
            } p-[16px] w-[50%] border-light-neutral-grey-200 rounded-md border cursor-pointer`}
          >
            Create from template
          </div>
        </div>
        {selectedFlow === 'template' ? (
          <div className="bg-light-system-bg-secondary p-[8px] flex flex-col gap-[4px] overflow-scroll">
            {Object.values(auth?.templates)?.map((template, key) => (
              <div
                key={key}
                onClick={() => {
                  setSelectedTemplate(template?.id);
                }}
                className={`${
                  selectedTemplate === template?.id
                    ? 'border-light-primary-blue-400 bg-light-primary-blue-50'
                    : ''
                } cursor-pointer flex flex-col gap-[4px]
                           p-[8px] border rounded-md border-light-neutral-grey-200
                           bg-light-system-bg-primary`}
              >
                <span className="semiBold300">{template?.name}</span>
                <span className="regular250">{template?.description}</span>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
        <Button
          disabled={selectedFlow === 'scratch' ? !botName : !botName || !selectedTemplate}
          onClick={() => {
            if (selectedFlow === 'template') {
              navigate(`/ui/dashboard/template?bot=${botName}&id=${selectedTemplate}`);
            } else navigate(`/ui/dashboard/new?bot=${botName}`);
            onClose();
          }}
          variant="contained"
          className="w-full"
        >
          Create
        </Button>
      </div>
    </Dialog>
  );
};

export default NewBotModel;
