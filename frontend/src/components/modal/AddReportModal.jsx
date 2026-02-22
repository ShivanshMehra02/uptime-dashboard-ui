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

// Modal component for adding new reports - matching reference design
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
        className="bg-[#2e2e4a] border border-[#4e4e6a] sm:max-w-[400px] rounded-[10px]"
      >
        <DialogHeader className="text-left space-y-1">
          <DialogTitle className="text-base font-semibold text-white">
            Add Dashboard Report
          </DialogTitle>
          <DialogDescription className="text-sm text-[#a0a0c0]">
            Create a new report to monitor your alerts.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Title field */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium text-[#c0c0e0]">
              Title <span className="text-[#e06a8a]">*</span>
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
              className={`bg-[#1f1f33] border-[#4e4e6a] focus:border-[#4a4aff] focus:ring-0 text-white placeholder:text-[#6e6e8a] rounded-lg h-10 ${
                errors.title ? 'border-[#e06a8a]' : ''
              }`}
            />
            {errors.title && (
              <p data-testid="title-error" className="text-xs text-[#e06a8a] mt-1">
                {errors.title}
              </p>
            )}
          </div>

          {/* Subtitle field */}
          <div className="space-y-2">
            <Label htmlFor="subtitle" className="text-sm font-medium text-[#c0c0e0]">
              Subtitle <span className="text-[#e06a8a]">*</span>
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
              className={`bg-[#1f1f33] border-[#4e4e6a] focus:border-[#4a4aff] focus:ring-0 text-white placeholder:text-[#6e6e8a] rounded-lg h-10 ${
                errors.subtitle ? 'border-[#e06a8a]' : ''
              }`}
            />
            {errors.subtitle && (
              <p data-testid="subtitle-error" className="text-xs text-[#e06a8a] mt-1">
                {errors.subtitle}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-3">
            <Button
              type="button"
              data-testid="modal-cancel-button"
              onClick={handleClose}
              className="bg-[#4e4e6a] text-[#c0c0e0] hover:bg-[#5e5e7a] transition-colors rounded-lg px-4 py-2"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              data-testid="modal-submit-button"
              className="bg-[#4a4aff] text-white hover:bg-[#5a5aff] font-medium transition-all rounded-lg px-4 py-2"
            >
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddReportModal;
