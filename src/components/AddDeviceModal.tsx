import { motion, AnimatePresence } from 'motion/react';
import { X, Smartphone, Tablet, Monitor } from 'lucide-react';
import { AddDeviceModalProps, DeviceType } from '../types';
import { FormEvent, useState } from 'react';

export const AddDeviceModal = ({ isOpen, onClose, onAdd }: AddDeviceModalProps) => {
  const [newDevice, setNewDevice] = useState<{
    name: string;
    width: number;
    height: number;
    type: DeviceType;
  }>({
    name: 'New Device',
    width: 1280,
    height: 720,
    type: 'custom'
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(newDevice);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-900/60 backdrop-blur-md cursor-pointer"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden border border-brand-200"
          >
            <div className="px-8 py-6 border-b border-brand-100 flex items-center justify-between bg-brand-50/50">
              <h2 className="font-display font-bold text-xl text-brand-900">Add New Device</h2>
              <button onClick={onClose} className="p-2 hover:bg-brand-100 rounded-full text-brand-500 hover:text-brand-900 transition-all cursor-pointer">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-brand-500 uppercase tracking-[0.1em] ml-1">Device Name</label>
                <input
                  type="text"
                  required
                  value={newDevice.name}
                  onChange={e => setNewDevice({...newDevice, name: e.target.value})}
                  className="w-full px-4 py-3 bg-brand-100 border-2 border-transparent focus:border-brand-900 focus:bg-white rounded-xl outline-none transition-all font-medium cursor-text"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-brand-500 uppercase tracking-[0.1em] ml-1">Width (px)</label>
                  <input
                    type="number"
                    required
                    value={newDevice.width}
                    onChange={e => setNewDevice({...newDevice, width: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 bg-brand-100 border-2 border-transparent focus:border-brand-900 focus:bg-white rounded-xl outline-none transition-all font-medium cursor-text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-brand-500 uppercase tracking-[0.1em] ml-1">Height (px)</label>
                  <input
                    type="number"
                    required
                    value={newDevice.height}
                    onChange={e => setNewDevice({...newDevice, height: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 bg-brand-100 border-2 border-transparent focus:border-brand-900 focus:bg-white rounded-xl outline-none transition-all font-medium cursor-text"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-brand-500 uppercase tracking-[0.1em] ml-1">Preset Style</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['mobile', 'tablet', 'desktop'] as DeviceType[]).map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setNewDevice({...newDevice, type})}
                      className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                        newDevice.type === type 
                          ? 'border-brand-900 bg-brand-900 text-white shadow-lg' 
                          : 'border-brand-100 bg-brand-50 text-brand-500 hover:border-brand-200'
                      }`}
                    >
                      {type === 'mobile' ? <Smartphone size={20} /> : type === 'tablet' ? <Tablet size={20} /> : <Monitor size={20} />}
                      <span className="text-[9px] font-bold uppercase tracking-widest">{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-900 text-white py-4 rounded-2xl font-bold text-sm hover:bg-brand-900/90 transition-all shadow-xl active:scale-[0.98] cursor-pointer mt-4"
              >
                Create Device Instance
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};