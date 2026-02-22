import { useState } from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

// Modal component for adding new reports
export const AddReportModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [errors, setErrors] = useState({ title: '', subtitle: '' });

  // Reset form when modal closes
  const handleClose = () => {
    setTitle('');
    setSubtitle('');
    setErrors({ title: '', subtitle: '' });
    onClose();
  };

  // Validate and submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = { title: '', subtitle: '' };
    let isValid = true;

    if (!title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (!subtitle.trim()) {
      newErrors.subtitle = 'Subtitle is required';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      onSubmit(title.trim(), subtitle.trim());
      handleClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        data-testid="add-report-modal"
        className="bg-slate-900 border border-slate-700 sm:max-w-[425px] shadow-2xl"
      >
        <DialogHeader className="text-left space-y-2">
          <DialogTitle className="text-lg font-semibold text-white">
            Add Dashboard Report
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-400">
            Create a new report to monitor your alerts and metrics.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          {/* Title field */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium text-slate-300">
              Title <span className="text-rose-400">*</span>
            </Label>
            <Input
              id="title"
              data-testid="modal-title-input"
              type="text"
              placeholder="Enter report title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title) setErrors((prev) => ({ ...prev, title: '' }));
              }}
              className={`bg-slate-800 border-slate-700 focus:border-blue-500 focus:ring-0 text-white placeholder:text-slate-500 rounded-lg h-10 ${
                errors.title ? 'border-rose-500' : ''
              }`}
            />
            {errors.title && (
              <p data-testid="title-error" className="text-xs text-rose-400 mt-1">
                {errors.title}
              </p>
            )}
          </div>

          {/* Subtitle field */}
          <div className="space-y-2">
            <Label htmlFor="subtitle" className="text-sm font-medium text-slate-300">
              Subtitle <span className="text-rose-400">*</span>
            </Label>
            <Input
              id="subtitle"
              data-testid="modal-subtitle-input"
              type="text"
              placeholder="Enter report subtitle"
              value={subtitle}
              onChange={(e) => {
                setSubtitle(e.target.value);
                if (errors.subtitle) setErrors((prev) => ({ ...prev, subtitle: '' }));
              }}
              className={`bg-slate-800 border-slate-700 focus:border-blue-500 focus:ring-0 text-white placeholder:text-slate-500 rounded-lg h-10 ${
                errors.subtitle ? 'border-rose-500' : ''
              }`}
            />
            {errors.subtitle && (
              <p data-testid="subtitle-error" className="text-xs text-rose-400 mt-1">
                {errors.subtitle}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              data-testid="modal-cancel-button"
              onClick={handleClose}
              className="bg-slate-700 text-slate-50 hover:bg-slate-600 border border-slate-600 transition-colors rounded-lg px-4 py-2"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              data-testid="modal-submit-button"
              className="bg-blue-500 text-white hover:bg-blue-600 shadow-sm font-medium transition-colors rounded-lg px-4 py-2"
            >
              Add Report
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddReportModal;
